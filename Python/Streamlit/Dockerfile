FROM python:3.10

WORKDIR /app

COPY . .


# RUN pip install pipreqs
# RUN pipreqs --force .

RUN pip freeze > requirements.txt

RUN pip install -r requirements.txt

RUN pip install streamlit

EXPOSE 8501

CMD ["streamlit", "run", "index.py"]