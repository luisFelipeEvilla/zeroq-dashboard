import officesData from '@/mock/offices.json';

export async function GET(req: Request, res: Response) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const name = searchParams.get('name') || '';

    const offices = officesData.filter((office) => {
        return office.name.toLowerCase().includes(name.toLowerCase());
    });

    return Response.json(offices);
}