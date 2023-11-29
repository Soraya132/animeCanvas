
import Filters from "@/components/Filters"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ResourceCard from "@/components/ResourceCard"
import SearchForm from "@/components/SearchForm"
import { getResources, getResourcesPlaylist } from "@/sanity/actions"
// import ReactPlayer from 'react-player/youtube'

interface Props{
  searchParams:{[key:string]:string | undefined}
}

const Page = async ({searchParams}:Props) => {
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: 1
  })
  const resourcesPlaylist = await getResourcesPlaylist();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className=" w-full">
        <Hero/>
        <SearchForm />
      </section>
      <div>
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=Q-PkjRb_GbQ' light={true} controls={true} volume={0.4} /> */}
      </div>
    
      <Filters />
      {(searchParams?.query || searchParams?.category) && (
         <section className="flex-center mt-6 w-full flex-col sm:mt-20">
         <Header 
         query={searchParams?.query || ""}
         category={searchParams?.category || ""}
         />
         <div className="mt-12 flex w-full flex-wrap justify-center gap-16">
           {resources?.length > 0 ? (
             resources.map((resource: any) => (
               <ResourceCard
                 key={resource._id}
                 title={resource.title}
                 id={resource._id}
                 image={resource.image} 
                 downloadLink ={resource.downloadLink}   
               />
             ))
           ) : (<p className="body-regular text-white-400">
             No resources found
           </p>)}
         </div>
       </section>
      )}
       {resourcesPlaylist?.map((item: any) => (
        <section key={item._id} className="flex-center mt-16 w-full flex-col sm:mt-24">
          <h1 className="heading3 text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16">
            {item.resources.map((resource: any) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadLink={resource.downloadLink}
                />
              ))}
          </div>
          

        </section>
      ))}
      
     
    </main>
  )
}
export default Page