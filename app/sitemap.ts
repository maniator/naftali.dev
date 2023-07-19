import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://naftali.lubin.dev',
            lastModified: new Date(),
        },
        {
            url: 'https://naftali.lubin.dev/blog',
            lastModified: new Date(),
        },
    ]
}