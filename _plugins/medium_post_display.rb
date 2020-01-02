require 'feedjira'
module Jekyll
  class MediumPostDisplay < Generator
    safe true
    priority :high
def generate(site)
      jekyll_coll = Jekyll::Collection.new(site, 'external_feed')
      site.collections['external_feed'] = jekyll_coll
Feedjira::Feed.fetch_and_parse("https://medium.com/feed/@teresaliu20").entries.each do |e|
        p "Title: #{e.title}, published on Medium #{e.url} #{e}"
        title = e[:title]
        content = e[:content]
        pub_date = e[:pubDate]
        guid = e[:url]
        path = "./_external_feed/" + title + ".md"
        path = site.in_source_dir(path)
        doc = Jekyll::Document.new(path, { :site => site, :collection => jekyll_coll })
        doc.data['title'] = title;
        doc.data['layout'] = 'blog-post';
        doc.data['feed_content'] = content;
        doc.data['pub_date'] = e.published;
        doc.data['medium_url'] = e.url
        jekyll_coll.docs << doc
      end
    end
  end
end