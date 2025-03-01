import axios, { AxiosResponse, AxiosError } from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: { 'Content-Type': 'application/json' },
});

// Перехватчик ответов для обработки ошибок
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response, // Успешный ответ пропускаем
    (error: AxiosError) => {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const errorData = error.response?.data;

            switch (status) {
                case 400:
                    console.error('Неверный запрос:', errorData);
                    break;
                case 401:
                    console.error('Не авторизован');
                    // Пример: редирект на страницу логина (для клиентского кода)
                    if (typeof window !== 'undefined') {
                        window.location.href = '/login';
                    }
                    break;
                case 403:
                    console.error('Доступ запрещён');
                    break;
                case 404:
                    console.error('Ресурс не найден');
                    break;
                case 500:
                    console.error('Ошибка сервера');
                    break;
                default:
                    console.error('Неизвестная ошибка:', error.message);
            }
        } else {
            console.error('Неизвестная ошибка вне Axios:', error);
        }
        return Promise.reject(error); // Пробрасываем ошибку для локальной обработки, если нужно
    }
);

export default axiosInstance;