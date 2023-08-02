import FireBase from './FireBase';
import {useState} from 'react';
import {UserRegister as User} from '../model/UserRegister';

const collectionName = 'Users';

export default function () {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | any>();

  const {
    saveDocument,
    getCollection,
    getDocument,
    updateDocument,
    deleteDocument,
  } = FireBase();

  const saveUser = async (user: User) => {
    const response = await saveDocument(collectionName, user);
    console.log(response);
  };

  const getUsers = async () => {
    const response = await getCollection(collectionName);
    setUsers(response);
    console.log(response);
  };

  const getUser = async (documentId: string) => {
    const response = await getDocument(collectionName, documentId);
    setUser(response);
    console.log(response);
  };

  const updateUser = async (documentId: string, user: User) => {
    const response = await updateDocument(collectionName, documentId, user);
    console.log(response);
  };

  const deleteUser = async (documentId: string) => {
    const response = await deleteDocument(collectionName, documentId);
    console.log(response);
  };

  return {
    saveUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    users,
    user,
  };
}
