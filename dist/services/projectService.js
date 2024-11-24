import { collection, addDoc, updateDoc, doc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
export async function submitProject(data) {
    try {
        // Create project document
        const projectRef = await addDoc(collection(db, 'projects'), {
            ...data,
            createdAt: serverTimestamp(),
            status: 'submitted'
        });
        // Update user's submissions array
        const userRef = doc(db, 'users', data.userId);
        await updateDoc(userRef, {
            submissions: arrayUnion(projectRef.id)
        });
        return projectRef.id;
    }
    catch (error) {
        console.error('Error submitting project:', error);
        throw error;
    }
}
