FROM python:3.10

WORKDIR /app

COPY . .

# RUN pip freeze > requirements.txt

RUN pip install pipreqs

RUN pipreqs .

RUN pip install -r requirements.txt

RUN pip install uvicorn

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
