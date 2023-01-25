import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
// import { collection } from "firebase/firestore/lite";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useActions } from "../../hooks/UseActions";
import { useSelector } from "react-redux";
import { async } from "@firebase/util";
import AnimeCardList from "../../components/AnimeCardList";
// import { collection, addDoc } from "firebase/firestore";

const Favourite = () => {
  const TryTODO = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        favourite: ["8393", "9384", "9300"],
        id: "хуйтикончений",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const usersCollectionRef = collection(db, "users");
  const [usersFav, setUsersFav] = useState([]);
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [favouriteAnimes, setFavouriteAnimes] = useState([]);
  // const findUser = async (users, searchId) => {
  //   let userById = await users.find((user) => user.id === searchId);
  //   return await userById;
  // };
  // let animes = [];
  useEffect(() => {
    // console.log(user);
    // console.log("user");
    const www = async () => {
      await getUserById();
      // getFavourite();
    };
    TryTODO();
    www();
  }, []);

  const getFavourite = async (usersFavvv) => {
    console.log("usersFav");
    console.log(usersFavvv);
    console.log("usersFav");
    for (let i = 0; i < usersFavvv.length; i++) {
      let y = fetchAnime(usersFavvv[i]);
      console.log(y);
      // let x = fetchAnime(y[i]).then(animes.push(x));
      // animes.push(y);
      setFavouriteAnimes([...favouriteAnimes, y]);
      console.log(favouriteAnimes);
    }
  };
  // const getData = async () => {};
  const getUserById = async () => {
    const data = await getDocs(usersCollectionRef);
    console.log("data");
    console.log(data);
    console.log("data");
    let users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(users);
    let searchId = user.uid; //"v1pyeLF3XxbFRnmzgoccg5umc4k2";//ід чела чий акк
    console.log(searchId);
    let userById = users.find((user) => user.id === searchId);
    console.log(userById.favourite);
    setUsersFav(userById.favourite);
    console.log(usersFav);
    getFavourite(userById.favourite);
    // setUsersFav(users.find((user) => user.id === searchId));
    // let find = findUser(users, searchId);
    // setUsersFav(find);
    // console.log(userById);
  };

  // console.log(usersFav);
  const { fetchAnime } = useActions();
  const { anime, loading, error } = useSelector((state) => state.anime);
  // useEffect(() => {
  //   fetchAnime();
  // }, []);
  // console.log("favourite");
  // console.log(animes);
  // console.log("favourite");
  return (
    <>
      <Header />
      <span>Favourite</span>
      {/* {favouriteAnimes.length != 0 ? (
        <AnimeCardList animes={favouriteAnimes} />
      ) : (
        <h1>sjjsjssjsjsj</h1>
      )} */}

      <Footer />
    </>
  );
};

export default Favourite;
