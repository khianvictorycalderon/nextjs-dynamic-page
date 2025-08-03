interface ParamsProps {
    params: Promise<{
        username: string;
    }>
}

export default async function UserName({ params }: ParamsProps) {

    const { username } = await params;

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-4xl font-semibold">Hello {username}</h1>
            </div>
        </div>
    )
}