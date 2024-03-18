

## About

## 使用技術
- Next.js
- TypeScript
- Prisma  
https://www.prisma.io/
- Supabase 
https://supabase.com/dashboard/project/ofdkskofxdnkkzdyrtzb/building

## 環境変数、パスワード
- DvkfX2VPVYmxC57t

## Prismaについて
- ORMとは Object-Relational Mapping
- 一般的に、オブジェクト指向プログラミング言語では、データをオブジェクトとして表現する。一方、リレーショナルデータベースでは、データを表形式のテーブルとして表現する。ORMは、これらの異なるデータモデル間の変換やマッピングを自動化することで、データベースとアプリケーションの間のやり取りを簡素化することができる

→ SQL文を書けなくてもJavaScriptでリレーショナルデータベースにアクセス可能ということ。
ただし、プロジェクトの内部でJSがSQLに変換されてDBにアクセスされる。

1. ORMは、オブジェクトとデータベーステーブルの間のマッピングを定義
2. ORMは、オブジェクト指向的な方法でデータベースに対するクエリを生成します。これにより、SQL文を直接書く必要がない
3. オブジェクト間の関連やリレーションシップを管理する

## コマンド
- npx prisma init
prismaの初期化。prisma/schema.prisma が生成される。


- 

- 


- npx prisma studio
DBを操作するためのGUIを起動

## ファイルに関して
- prisma/schema.prisma
Prismaのスキーマを定義。
データベースのテーブルやフィールドの定義、データモデルの関連性などが記述。
Prismaは、このスキーマ定義を元に、データベースへのアクセスやクエリを生成する。

## VS Code 拡張機能
- Prisma ... 配色など