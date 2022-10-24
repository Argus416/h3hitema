FROM python:3.10

RUN pip3 install FastAPI
RUN pip3 install uvicorn

WORKDIR /app

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

  