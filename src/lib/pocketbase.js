import pocketBase from 'pocketbase';
export const pb = new pocketBase('http://198.211.108.168:8090');
export const isUserValid = pb.authStore.isValid;
export const collectionName = pb.authStore.model;

pb.autoCancellation(false);

export async function loginAdmin(username, password) {
    try {
        await pb.collection("admin").authWithPassword(username, password);
        window.location.reload();
    } catch (err) {
        pb.authStore.isValid ? (window.alert("Bad Login Attempt")) : (window.alert("Invalid Credentials!"))
    }
    
}

export async function loginPatient(username, password) {
    try {
        await pb.collection("patient").authWithPassword(username, password);
        window.location.reload();
    } catch (err) {
        pb.authStore.isValid ? (window.alert("Bad Login Attempt")) : (window.alert("Invalid Credentials!"))
    }
    
}

export async function loginDoctor(username, password) {
    try {
        await pb.collection("doctor").authWithPassword(username, password);
        window.location.reload();
    } catch (err) {
        pb.authStore.isValid ? (window.alert("Bad Login Attempt")) : (window.alert("Invalid Credentials!"))
    }
    
}

export function signout() {
    pb.authStore.clear();
    window.location.reload();
}

export async function signupPatient(username, password) {
    const data = {
        username: username,
        password: password,
        passwordConfirm: password,
    };
    await pb.collection("patient").create(data);
}

export async function createNews(content, role) {
    
    const data = {
    "date": new Date(),
    "content": content,
    "role": role
    };

const record = await pb.collection('news').create(data);
}

export async function createMedical(content, patient, date) {
    const data = {
      "date_of_checkup": date,
      "doctors_comment": content,
      "patient": patient,
      "doctor": pb.authStore.model?.id
    };
    try {
      const record = await pb.collection('medical_checkup').create(data);
      console.log(record);
      return record;
    } catch (error) {
      window.alert(`Error: ${error.message}`);
    }
  }
  

