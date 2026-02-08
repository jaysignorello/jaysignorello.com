require "digest"

module Jekyll
  module CacheBustFilter
    # Appends a ?v=<hash> query param to an asset path for cache busting.
    # In production (JEKYLL_ENV=production), uses git short hash for consistent cache bust across deploy.
    # Otherwise uses file MD5. Usage: {{ '/assets/css/output.css' | relative_url | cache_bust }}
    def cache_bust(path)
      site = @context.registers[:site]
      file_path = File.join(site.source, path.sub(site.config["baseurl"].to_s, ""))

      hash = (production? && git_hash) ? git_hash : file_hash(file_path)
      hash ? "#{path}?v=#{hash}" : path
    end

    private

    def production?
      (site.config["environment"] || ENV["JEKYLL_ENV"]).to_s == "production"
    end

    def site
      @context.registers[:site]
    end

    def git_hash
      @git_hash ||= begin
        rev = `git rev-parse --short HEAD 2>/dev/null`.strip
        rev.empty? ? nil : rev
      end
    end

    def file_hash(file_path)
      return nil unless File.exist?(file_path)
      Digest::MD5.file(file_path).hexdigest[0, 8]
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBustFilter)
