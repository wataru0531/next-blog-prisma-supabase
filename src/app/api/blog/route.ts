// ブログに関するapi

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// データベース(Supabase)に接続開始
export async function main() {
  try {
    await prisma.$connect(); // DBに接続開始

  } catch (err) {
    return Error("DB接続に失敗しました");
  }
}

// 前記事を取得  「GET」は任意ではないので注意
// http://localhost:3000/api/blog
export const GET = async (req: Request, res: NextResponse) => {
  console.log("GET");

  try {
    await main(); // データベースに接続

    // 全記事取得
    // prisma.post ... migration.sqlファイルのpost。
    // findMany() ... データベースの全記事取得
    const posts = await prisma.post.findMany({ orderBy: { date: "asc" } });

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });

  } finally { // エラーが出ても実行される
    // 接続を停止
    await prisma.$disconnect();
  }
};


