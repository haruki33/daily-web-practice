# Node.jsの公式イメージをベースにします。
# 比較的安定しており、サイズも小さいslimバージョンを選択します。
FROM node:20-bookworm-slim

# コンテナ内の作業ディレクトリを設定します。
WORKDIR /workspace

# コンテナが起動し続けるように、何もしないコマンドを実行させます。
CMD ["tail", "-f", "/dev/null"]
