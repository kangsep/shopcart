import { Skeleton } from '@/components/ui/skeleton'

function LoadingSkeleton() {
  return (
    <div className=" max-w-7xl mx-auto p-6 pt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* kiri */}
        <div className="flex flex-col gap-4">
            {/* image badag */}
            <Skeleton className="h-105 w-full rounded-2xl"/>
            {/* thumbnail kecil-kecil */}
            <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 4}).map((_, i) => (
                    <Skeleton
                    key={i}
                    className="h-[90px] w-full rounded-xl"
                    />
                ))}

            </div>
        </div>
        
        {/* kanan */}
        <div className="flex flex-col gap-4">
            {/* nama produk */}
            <div className="space-y-3">
                <Skeleton className="h-10 w-[70%] "/>
                <Skeleton className="h-4 w-full "/>
                <Skeleton className="h-4 w-[90%] "/>
            </div>
            {/* rating */}
            <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24"/>
                <Skeleton className="h-4 w-12"/>
            </div>

            <Skeleton className="h-px w-full"/>

            {/* harga */}
            <div className="space-y-3">
                <Skeleton className="h-8 w-full"/>
                <Skeleton className="h-4 w-[70%]"/>
            </div>

            <Skeleton className="h-px w-full" />

            {/* pilihan warna */}
            <div className="space-y-3">
                <Skeleton className="h-5 w-32"/>

                <div className="flex gap-3">
                    {Array.from({length: 4}).map((_, i)=> (
                        <Skeleton 
                        key={i}
                        className="h-8 w-8 rounded-full"/>
                    ))}
                </div>
            </div>

            <Skeleton className="h-px w-full" />

            {/* qty */}
            <div className="flex items-center gap-6">
                <Skeleton className="h-12 w-32 rounded-full"/>

                <div className="space-y-2">
                    <Skeleton className="h-4 w-28"/>
                    <Skeleton className="h-4 w-20"/>
                </div>
            </div>
            {/* buttons */}
            <div className="flex gap-4">
                <Skeleton className="h-12 flex-1 rounded-full"/>
                <Skeleton className="h-12 flex-1 rounded-full"/>
            </div>

            {/* delivery ingfo */}
            <div className="flex flex-col gap-3 mt-2">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div
                    key={i}
                    className="border border-gray-200 rounded-xl p-4 flex gap-4">
                    <Skeleton className="h-8 w-8 rounded-full shrink-0" />

                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-[80%]" />
                </div>
            </div>
          ))}
        </div>

        </div>
    </div>
  )
}

export default LoadingSkeleton