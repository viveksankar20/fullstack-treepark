import { NextRequest, NextResponse } from 'next/server';
import productDetails from '@/JsonFiles/productDetails.json';

export async function GET(req:NextRequest) {
  const searchParaams=req.nextUrl.searchParams
const query = searchParaams.get('query');

if(query === 'productDetails') {
  return NextResponse.json({data:productDetails[0].productDetails,message:"Product Details"});
}
  else{
    return NextResponse.json(productDetails);
  }  
 
}
