import { auth, db } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  User,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  getDocs,
  Timestamp,
} from 'firebase/firestore';

interface Post {
  title: string;
  description: string;
  type: string;
  userId: string;
  userName: string;
  timestamp: Timestamp;
}

// Authentication functions
export const signUp = async (
  email: string,
  password: string,
  displayName: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName });
  return userCredential.user;
};

export const signIn = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const logOut = async (): Promise<void> => {
  await signOut(auth);
};

// Post functions
export const createPost = async (post: Omit<Post, 'userId' | 'userName' | 'timestamp'>): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error('User must be logged in to create a post');

  await addDoc(collection(db, 'posts'), {
    ...post,
    userId: user.uid,
    userName: user.displayName || 'Anonymous',
    timestamp: Timestamp.now(),
  });
};

export const getUserPosts = async (userId: string): Promise<Post[]> => {
  const postsQuery = query(
    collection(db, 'posts'),
    where('userId', '==', userId),
    orderBy('timestamp', 'desc')
  );

  const querySnapshot = await getDocs(postsQuery);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Post[];
};

export const getAllPosts = async (): Promise<Post[]> => {
  const postsQuery = query(
    collection(db, 'posts'),
    orderBy('timestamp', 'desc')
  );

  const querySnapshot = await getDocs(postsQuery);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Post[];
};

export const updatePost = async (
  postId: string,
  updates: Partial<Post>
): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error('User must be logged in to update a post');

  const postRef = doc(db, 'posts', postId);
  await updateDoc(postRef, updates);
};

export const deletePost = async (postId: string): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error('User must be logged in to delete a post');

  const postRef = doc(db, 'posts', postId);
  await deleteDoc(postRef);
}; 