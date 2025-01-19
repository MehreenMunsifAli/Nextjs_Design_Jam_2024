import Banner from "@/components/Banner";
import BlogListPageCard from "@/components/BlogListPageCard";

export default function BlogListPage() {
    
    const allChef = [
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_lRAWcT7uwhY.svg',
            chefName: 'Tahmina Rumi',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_XQWfro4LrVs.svg',
            chefName: 'Jorina Begum',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_v3OlBE6-fhU.svg',
            chefName: 'M.Mohammad',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_SiQgni-cqFg.svg',
            chefName: 'Munna Kathy',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_7qileFwJEWo.svg',
            chefName: 'Tahmina Rumi',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_DdglEoIC2y4.svg',
            chefName: 'Bisnu devgon',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_llcX9pTjhXM.svg',
            chefName: 'Motin Molladsf',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_uTaSlu2Jfsg.svg',
            chefName: 'William Rumi',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_iv6yNy7oBqQ.svg',
            chefName: 'Kets william roy',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_CYnQUywzBtI.svg',
            chefName: 'Ataur Rahman',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_VdFBh2ZgXbM.svg',
            chefName: 'Ataur Rahman',
        },
        {
            imgPath: '/assets/images/our_chef_page_card/unsplash_GSD9VoG6f-U.svg',
            chefName: 'Monalisa holly',
        },
    ]

    return(
        <>
        <Banner Title="Blog List" Page="Blog" />
        <div className="bg-white">
            <div className="container max-w-screen-lg mx-auto py-20 grid grid-cols-1 md:grid-cols-12 gap-4">
               {allChef.map((chef, idx) => (
                <div key={idx} className="w-2/3 md:w-full md:col-span-8">
                    <BlogListPageCard ImagePath={chef.imgPath} AltText={`Chef ${idx + 1}`} BlogTitle={chef.chefName} />
                </div>
               ))}
            </div>
        </div>
        </>
    )
}