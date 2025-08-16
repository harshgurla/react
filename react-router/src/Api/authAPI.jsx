import { apiClient } from "../apiClient";
import { redirect } from 'react-router';


export const LoginAction = async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email')
    const password = data.get('password')

    try {
        const response = await apiClient.post('/auth/login', {
            email,
            password
        });


        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const RegisterAction = async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username')
    const email = data.get('email')
    const password = data.get('password')
    

    try {
        const response = await apiClient.post('/auth/register', {
            username,
            email,
            password
        });

        if(response.status === 201) {
            return redirect('/login');
        }
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

