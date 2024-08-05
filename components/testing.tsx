import React from 'react'
// import { PrismaClient } from '@prisma/client'
import prisma from '@/utils/db';
export default async function Testing() {
  // const prisma = new PrismaClient();
  const user = await prisma.user.findMany();
  return (
    <div>testing `${JSON.stringify(user)}`</div>
    // <div> Testinggg</div>
  )
}

