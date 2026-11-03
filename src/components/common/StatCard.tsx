interface StatCardProps {
    title: string;
    value: number;
    description: string;
}


export function StatCard({
title,
value,
description,

} : StatCardProps  )  {

    return (
        <article className=" rounded-xl border border-slate-200 bg-white p-5 shadoe-sm">
            <p className="text-sm text-slate-500">{title}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900"> {value}</h2>
            <p className="mt-2  text-xs text-slate-400">{description}</p>
        </article> 
    )
}