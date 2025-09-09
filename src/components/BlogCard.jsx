const BlogCard = ({ post }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="p-6">
            <p className="text-green-600 font-semibold text-sm mb-2">{post.category}</p>
            <h3 className="font-bold text-xl text-gray-800 mb-3 h-14 hover:text-green-700 transition-colors">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4 h-16">{post.excerpt}</p>
            <div className="flex items-center">
                <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-3"/>
                <div>
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
            </div>
        </div>
    </div>
);
export default BlogCard;