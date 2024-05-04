import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  limit,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { IRenungan } from "../types";
import { firestore } from "../libs/firebase/init";

const logger = require("../libs/logger");
const crypto = require("crypto");
const RENUNGAN_COLLECTION_NAME = "renungan-1";

const getRenunganById = async (id: string): Promise<IRenungan | null> => {
  try {
    const docRef = doc(firestore, RENUNGAN_COLLECTION_NAME, id);
    const res = await getDoc(docRef);

    if (!res.exists()) throw Error;
    if (!res.data()) throw Error;

    return {
      ...(res.data() as IRenungan),
    };
  } catch (error) {
    return null;
  }
};

const getRenunganBySeries = async (
  series: string
): Promise<IRenungan[] | []> => {
  try {
    const renunganRef = collection(firestore, RENUNGAN_COLLECTION_NAME);
    const q = query(renunganRef, where("series", "==", series));
    const querySnapshot = await getDocs(q);

    const renunganList: IRenungan[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as IRenungan),
    }));

    return renunganList;
  } catch (error) {
    return [];
  }
};

const addRenungan = async (data: IRenungan): Promise<boolean | null> => {
  try {
    const newId = crypto.randomUUID().slice(0, 5);
    const docRef = doc(firestore, RENUNGAN_COLLECTION_NAME, newId);

    await setDoc(docRef, data);

    return true;
  } catch (error) {
    return null;
  }
};

const updateRenungan = async (
  id: string,
  data: Partial<IRenungan>
): Promise<boolean | null> => {
  try {
    const docRef = doc(firestore, RENUNGAN_COLLECTION_NAME, id);

    await updateDoc(docRef, data);

    return true;
  } catch (error) {
    return null;
  }
};

const deleteRenungan = async (id: string): Promise<boolean | null> => {
  try {
    const docRef = doc(firestore, RENUNGAN_COLLECTION_NAME, id);

    await deleteDoc(docRef);

    return true;
  } catch (error) {
    return null;
  }
};

const getAllRenungan = async (): Promise<IRenungan[] | []> => {
  try {
    let data: IRenungan[] = [];
    const querySnapshot = await getDocs(
      collection(firestore, RENUNGAN_COLLECTION_NAME)
    );

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      } as IRenungan);
    });

    return data;
  } catch (error) {
    return [];
  }
};

module.exports = {
  getRenunganById,
  getRenunganBySeries,
  getAllRenungan,
  addRenungan,
  updateRenungan,
  deleteRenungan,
};
