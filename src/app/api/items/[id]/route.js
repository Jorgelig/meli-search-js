import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { params: { id } } = context;

  const searchTermUrl = `https://api.mercadolibre.com/items/${id}`;
  const searchDescriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;

  const [searchTermResponse, searchDescriptionResponse] = await Promise.all([
    fetch(searchTermUrl),
    fetch(searchDescriptionUrl),
  ]);

  const [searchTermData, searchDescriptionData] = await Promise.all([
    searchTermResponse.json(),
    searchDescriptionResponse.json()
  ]);

  return NextResponse.json({ searchTermData, searchDescriptionData });
}