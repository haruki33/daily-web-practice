import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { setupCronJob, getExecutionCount, resetExecutionCount } from '../problem/script.js';
import cron from 'node-cron';

// cron.scheduleをモック化
vi.mock('node-cron', async () => {
  const actual = await vi.importActual('node-cron');
  // scheduleだけをモックし、他は実際の実装を使う
  const scheduleMock = vi.fn((...args) => {
      const task = actual.schedule(...args);
      // vitestのモックでラップして返す
      return {
          start: vi.fn(task.start),
          stop: vi.fn(task.stop),
          validate: vi.fn(task.validate)
      };
  });
  
  return {
    ...actual,
    default: {
        ...actual.default,
        schedule: scheduleMock,
    },
    schedule: scheduleMock,
  };
});


describe('cron job test', () => {

    beforeEach(() => {
        // 各テストの前にカウンターをリセット
        resetExecutionCount();
        // モックの呼び出し履歴をリセット
        vi.clearAllMocks();
    });

    it('cron.scheduleが正しい引数で呼び出されること', () => {
        setupCronJob();
        // cron.scheduleが呼び出されたか
        expect(cron.schedule).toHaveBeenCalled();
        // 1番目の引数（cron式）が正しいか
        expect(cron.schedule.mock.calls[0][0]).toBe('* * * * * *');
        // 2番目の引数（タスク関数）が関数であるか
        expect(typeof cron.schedule.mock.calls[0][1]).toBe('function');
    });

    it('setupCronJobがScheduledTaskオブジェクトを返すこと', () => {
        const job = setupCronJob();
        expect(job).not.toBeNull();
        expect(job).toBeDefined();
        // モックされたstartとstopメソッドを持っているか
        expect(typeof job.start).toBe('function');
        expect(typeof job.stop).toBe('function');
    });

    it('スケジュールされたタスクが約3秒間で3回以上実行されること', async () => {
        vi.unmock('node-cron'); // このテストでは実際のタイマーを使いたいのでモックを解除
        const { setupCronJob, getExecutionCount, resetExecutionCount } = await import(`../problem/script.js?t=${Date.now()}`);
        resetExecutionCount();

        const job = setupCronJob();
        expect(job).not.toBeNull();
        
        // 3.5秒待機
        await new Promise(resolve => setTimeout(resolve, 3500));
        
        job.stop();
        
        const count = getExecutionCount();
        // 3秒で3回、またはタイミングにより4回実行される可能性がある
        expect(count).toBeGreaterThanOrEqual(3);
        expect(count).toBeLessThanOrEqual(4);
    }, 10000); // タイムアウトを10秒に延長
});
