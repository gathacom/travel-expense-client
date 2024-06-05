import CreateTripForm from "@/components/Fragments/CreateTripForm";
import Header from "@/components/Fragments/Header";
import TotalExpense from "@/components/Fragments/TotalExpense";
import TripList from "@/components/Fragments/TripList";
import useLogin from "@/hooks/useLogin";
import { totalExpenses } from "@/services/expenseService";
import { tripsByAuthor } from "@/services/tripService";
import React, { useEffect, useState } from "react";

const TripPage = () => {
  const [username, setUsername] = useState("Gathacom");
  const [modalVisible, setModalVisible] = useState(false);
  const user = useLogin();
  const [totalExpense, setTotalExpense] = useState(1000);
  const [trips, setTrips] = useState([]);

  const getTrips = async () => {
    tripsByAuthor((status, res) => {
      if (status) {
        setTrips(res.data.trips);
      } 
    });
  };
  const fetchTotalExpense = async () => {
    try {
      totalExpenses((status, res) => {
        if(res.status === 200) {
          setTotalExpense(res.data.totalExpense);
        }
      })
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchTotalExpense();
  },[]);

  useEffect(() => {
    getTrips();
  },[trips, getTrips]);

  
  useEffect(() => {
    if (user) {
      setUsername(user.username);
    } else {
      window.location.href = "/";
    }
  }, [user]);

  // const trips = [
  //   {
  //     id: "clwewu41y00004vgltbw1si0k",
  //     title: "Bali",
  //     description: "Trip on Bali",
  //     createdAt: "2024-05-20T11:55:59.877Z",
  //     updatedAt: "2024-05-20T11:55:20.217Z",
  //     userId: "clwews56v00009wc743o76jwz",
  //     expenses: [
  //       {
  //         id: "clwewvicj00014vglnbnho5zd",
  //         title: "Tiket Pesawat",
  //         amount: 2000000,
  //         description: "dari jogja ke bali",
  //         createdAt: "2024-05-20T11:57:05.060Z",
  //         updatedAt: "2024-05-20T11:56:11.821Z",
  //         tripId: "clwewu41y00004vgltbw1si0k",
  //       },
  //       {
  //         id: "clwgkewe00000kq84fidjc7qz",
  //         title: "Hotel",
  //         amount: 1000000,
  //         description: "",
  //         createdAt: "2024-05-21T15:43:47.011Z",
  //         updatedAt: "2024-05-21T15:43:06.734Z",
  //         tripId: "clwewu41y00004vgltbw1si0k",
  //       },
  //     ],
  //   },
  //   {
  //     id: "clwxoy2i7000ds1q83e76nf5y",
  //     title: "Jakarta 2efvgv",
  //     description: "magang2",
  //     createdAt: "2024-06-02T15:22:44.912Z",
  //     updatedAt: "2024-06-02T15:22:44.912Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [],
  //   },
  //   {
  //     id: "clwxoyc32000fs1q8xr9dnvpb",
  //     title: "Jakarta 2efvgvcf",
  //     description: "magang2",
  //     createdAt: "2024-06-02T15:22:57.327Z",
  //     updatedAt: "2024-06-02T15:22:57.327Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [],
  //   },
  //   {
  //     id: "clwxozabt000hs1q8rdwnmxf0",
  //     title: "Jakarta 2efvgvcfvf",
  //     description: "magang2",
  //     createdAt: "2024-06-02T15:23:41.706Z",
  //     updatedAt: "2024-06-02T15:23:41.706Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [],
  //   },
  //   {
  //     id: "clwxpdqah000js1q88r5gh679",
  //     title: "bali 2025",
  //     description: "otw",
  //     createdAt: "2024-06-02T15:34:55.577Z",
  //     updatedAt: "2024-06-02T15:34:55.577Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [
  //       {
  //         id: "clwxywder000311lyfa5mutzv",
  //         title: "tiket pesawat ",
  //         amount: 2000000,
  //         description: "jogja ke bali",
  //         createdAt: "2024-06-02T20:01:21.891Z",
  //         updatedAt: "2024-06-02T20:01:21.891Z",
  //         tripId: "clwxpdqah000js1q88r5gh679",
  //       },
  //     ],
  //   },
  //   {
  //     id: "clweyp0z40001o6nzmtxlhxqo",
  //     title: "Danau Toba, Pulau Samosir, bang",
  //     description: "Trip to danau toba 4days and 3 nights",
  //     createdAt: "2024-05-20T12:48:01.838Z",
  //     updatedAt: "2024-06-02T16:54:52.364Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [
  //       {
  //         id: "clwgmjea60001ydetf9mpgvac",
  //         title: "Makan Mie Ayam bakso",
  //         amount: 400000,
  //         description: "20000/porsi (20 Porsi)",
  //         createdAt: "2024-05-21T16:43:16.110Z",
  //         updatedAt: "2024-06-02T19:09:05.814Z",
  //         tripId: "clweyp0z40001o6nzmtxlhxqo",
  //       },
  //       {
  //         id: "clwxyuh5w000111lynhl5g3zg",
  //         title: "Kapal",
  //         amount: 500000,
  //         description: "buat nyebrang",
  //         createdAt: "2024-06-02T19:59:53.274Z",
  //         updatedAt: "2024-06-02T19:59:53.274Z",
  //         tripId: "clweyp0z40001o6nzmtxlhxqo",
  //       },
  //     ],
  //   },
  //   {
  //     id: "clwxyx1g9000511lyog47fdrw",
  //     title: "jakarta 2023",
  //     description: "november",
  //     createdAt: "2024-06-02T20:01:53.049Z",
  //     updatedAt: "2024-06-02T20:01:53.049Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [],
  //   },
  //   {
  //     id: "clwxyzm8g000711lyxyz30i6n",
  //     title: "jakarta 2024",
  //     description: "maret",
  //     createdAt: "2024-06-02T20:03:53.296Z",
  //     updatedAt: "2024-06-02T20:03:53.296Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [],
  //   },
  //   {
  //     id: "clwyqem990001lwzlzc8yv508",
  //     title: "Bromo",
  //     description: "naik gunung bromo",
  //     createdAt: "2024-06-03T08:51:22.798Z",
  //     updatedAt: "2024-06-03T08:51:43.168Z",
  //     userId: "clwey3i9i0002tb1e2memigeb",
  //     expenses: [],
  //   },
  //   {
  //     id: "clx0zidzd00015hs645rsdzu1",
  //     title: "Siborongborong 2023",
  //     description: "maret",
  //     createdAt: "2024-06-04T22:41:47.593Z",
  //     updatedAt: "2024-06-04T22:41:47.593Z",
  //     userId: "clx0vk1m00000npkxycavh0qy",
  //     expenses: [],
  //   },
  // ];


  return (
    <>
      <div>
        {/* <Header></Header> */}
        <div className="flex flex-row">
          <div className="flex flex-col w-1/4 py-10 px-10 bg-secondary/90 fixed-top h-[100vh] items-center">
            <h2 className="font-bold text-[42px] text-center text-primary mb-10">
              Travel Expense
            </h2>
            <div className="flex items-center flex-col">
              <h2 className="font-bold text-xl text-light">
                Wellcome {username}
              </h2>
            </div>
            <TotalExpense totalExpense={totalExpense}></TotalExpense>
            <button onClick={()=>setModalVisible(true)} className="text-md font-bold text-light bg-primary px-5 py-3 rounded-xl mt-3">
              Add New Trip
            </button>
          </div>

          <div className="p-10 w-3/4 h-[100vh] overflow-y-scroll ">
            <TripList trips={trips} />
          </div>
        </div>
      </div>
      <CreateTripForm visible={modalVisible} onClose={()=>setModalVisible(false)}/>
    </>
  );
};

export default TripPage;
