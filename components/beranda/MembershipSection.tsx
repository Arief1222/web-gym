import { memberships } from "@/app/data/berandaData"

const MembershipSection : React.FC = () => {
    return (
        <section className="flex justify-around items-center gap-2 flex-col p-4 md:p-0 w-4/5 md:w-3/5 mt-36">
            <h2 className="text-3xl font-extrabold mb-4 text-center">MEMBERSHIP</h2>
            <p className="text-lg max-w-2xl text-center md:text-left md:mx-0 text-[#909090]">
               Mulai Perjalanan Transformasi Tubuhmu
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-6">
                {memberships.map((membership, index) => (
                    <div className="border border-red-600 rounded-lg text-center flex flex-col gap-2 justify-between items-center p-8" key={index}>
                        <p className="text-sm">{membership.type}</p>
                        <h2 className="font-extrabold text-4xl">{membership.price}</h2>
                         <p className="text-lg text-[#909090]">
                            Monthly Membership
                         </p>
                          <p className="text-lg text-[#909090]">
                            {membership.profit}
                         </p>
                          <button className="mt-6 btn-red  px-6 py-3 font-semibold">
                            Gabung Sekarang
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MembershipSection