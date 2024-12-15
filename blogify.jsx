export default function Widget() {
    return (
        
        
        <header className="header bg-primary text-primary-foreground">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Blogify</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="blogs bg-background text-primary-foreground">
          <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold">Latest Blogs</h2>
            <div id="blog-list" className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="blog-item bg-card text-card-foreground p-4 rounded-md">
                <img src="https://openui.fly.dev/openui/300x200.svg?text=Blog+Image" alt="Blog Image" className="w-full h-40 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-bold">Blog Title</h3>
                <p className="text-sm text-muted-foreground">Posted on: June 1, 2024</p>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="mt-2 block text-primary hover:underline">Read more</a>
              </div>
            </div>
          </div>
        </section>
        <section className="admin-section bg-card text-card-foreground">
          <div className="container mx-auto p-4">
            <h2 className="text-lg font-bold">Create Blog Post</h2>
            <form id="create-blog-form" className="mt-4">
              <label htmlFor="title" className="block">Title:</label>
              <input type="text" id="title" name="title" required className="w-full p-2 border border-input rounded-md" />
              <label htmlFor="content" className="block mt-2">Content:</label>
              <textarea id="content" name="content" rows="5" required className="w-full p-2 border border-input rounded-md"></textarea>
              <button type="submit" className="bg-primary text-primary-foreground py-2 px-4 mt-2 rounded-md hover:bg-primary/80">Post Blog</button>
            </form>
          </div>
        </section>
        <footer className="footer bg-primary text-primary-foreground">
          <div className="container mx-auto p-4">
            <p>&copy; 2024 Blogify. All rights reserved.</p>
          </div>
        </footer>
        
        
    )
}