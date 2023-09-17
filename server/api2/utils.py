import os

import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name="djobrcmt9",
    api_key="194631512869641",
    api_secret="A3x7ajL9fUX2f5OHqzIgcwki0pY"
)

# Функция для загрузки изображения в Cloudinary
def upload_image(image):
    try:
        upload_result = cloudinary.uploader.upload(image)

        return upload_result
    except Exception as e:
        print(f"Ошибка при загрузке изображения в Cloudinary: {e}")
        raise e

