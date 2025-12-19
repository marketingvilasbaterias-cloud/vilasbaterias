import { useEffect, useState } from 'react';
import { BookOpen, Calendar, ArrowRight, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { BlogPost } from '../types';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#273444] to-[#1a2332] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-[#E43338] mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Blog e Dicas</h1>
            <p className="text-xl text-gray-300">
              Aprenda mais sobre manutenção, cuidados e tudo sobre baterias automotivas
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E43338] focus:border-transparent"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#E43338]"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {searchTerm
                  ? 'Nenhum artigo encontrado com esse termo.'
                  : 'Em breve teremos conteúdos incríveis para você!'}
              </p>
            </div>
          ) : (
            <>
              {selectedPost ? (
                <article className="max-w-3xl mx-auto">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-[#E43338] font-semibold hover:underline mb-6 flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2 rotate-180" />
                    Voltar aos artigos
                  </button>

                  {selectedPost.image_url && (
                    <img
                      src={selectedPost.image_url}
                      alt={selectedPost.title}
                      className="w-full h-96 object-cover rounded-2xl mb-8"
                    />
                  )}

                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(selectedPost.created_at)}
                    </div>
                    <h1 className="text-4xl font-bold text-[#273444] mb-6">
                      {selectedPost.title}
                    </h1>
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                      {selectedPost.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="whitespace-pre-wrap">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-[#273444] mb-6">Outros artigos</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {posts
                        .filter((p) => p.id !== selectedPost.id)
                        .slice(0, 3)
                        .map((post) => (
                          <button
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="text-left bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
                          >
                            {post.image_url && (
                              <img
                                src={post.image_url}
                                alt={post.title}
                                className="w-full h-40 object-cover"
                              />
                            )}
                            <div className="p-4">
                              <h4 className="font-bold text-[#273444]">{post.title}</h4>
                              <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                            </div>
                          </button>
                        ))}
                    </div>
                  </div>
                </article>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <button
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="text-left bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
                    >
                      {post.image_url && (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar size={16} className="mr-2" />
                          {formatDate(post.created_at)}
                        </div>
                        <h3 className="text-xl font-bold text-[#273444] mb-3">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <button className="text-[#E43338] font-semibold flex items-center hover:underline">
                          Ler mais
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
