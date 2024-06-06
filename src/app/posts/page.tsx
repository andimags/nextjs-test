async function Home() {
    const response = await fetch("https://dummyjson.com/posts?limit=3&skip=3");
    const data = await response.json();

    interface Post {
        id: number;
        title: string;
        body: string;
        tags: Array<string>;
        reactions: object;
        views: number;
        userId: number;
    }
    return (
        <main>
            <nav className="shadow-sm p-4">
                <div className="flex text-zinc-400 gap-4 justify-end">
                    <a href=""></a>
                    <a href="">Posts</a>
                </div>
            </nav>
            <section className="p-4">
                <h1 className="zinc-800 text-4xl font-bold">Posts</h1>
                <table>
                    <thead>
                        <tr>
                            <th className="p-4">Title</th>
                            <th className="p-4">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.posts.map((post: Post) => (
                            <tr key={post.id}>
                                <td className="p-4">{post.title}</td>
                                <td className="p-4">{post.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>{data.body}</p>
            </section>
        </main>
    );
}

export default Home;
