// 問題 1:
// node-cron パッケージを 'cron' という名前でインポートしてください。
// ↓↓↓↓ ここにコードを書いてください ↓↓↓↓
import cron from 'node-cron';
// ↑↑↑↑ ここまで ↑↑↑↑


// このカウンターとタスク関数は変更しないでください
let executionCount = 0;
const task = () => {
    executionCount++;
    console.log(`タスク実行回数: ${executionCount}`);
};

/**
 * @returns {import('node-cron').ScheduledTask}
 */
export function setupCronJob() {
    // 問題 2:
    // 1秒ごとに `task` 関数を実行する cron ジョブを作成してください。
    // ヒント: 1秒ごとのcron式は '* * * * * *' です。
    // 作成したジョブはすぐに開始し、そのジョブオブジェクトを返してください。

    // ↓↓↓↓ ここにコードを書いてください ↓↓↓↓
    const job = cron.schedule('* * * * * *', task);
    return job;
    // ↑↑↑↑ ここまで ↑↑↑↑
}


// --- 以下は動作確認とテスト用のコードです ---
if (process.env.NODE_ENV !== 'test') {
    const myJob = setupCronJob();
    if (myJob) {
        console.log("Cronジョブを開始しました。");
        setTimeout(() => {
            myJob.stop();
            console.log("Cronジョブを停止しました。");
            console.log(`最終的なタスク実行回数: ${executionCount}`);
        }, 5000);
    } else {
        console.log("setupCronJobからジョブが返されませんでした。");
    }
}

// テストのために executionCount を取得するヘルパー
export const getExecutionCount = () => executionCount;
export const resetExecutionCount = () => { executionCount = 0; };
