type PageParams = {
    params: {
        id: number;
    };
};

async function Page({ params }: PageParams) {
    type Post = {
        id: number;
        title: string;
        body: string;
        tags: Array<string>;
        reactions: object;
        views: number;
        userId: number;
    };

    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const data: Post = await response.json();

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-zinc-600">{data.body}</p>
        </main>
    );
}

export default Page;
