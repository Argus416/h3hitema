FROM python:3.10

RUN pip3 install streamlit
RUN pip3 install pandas
RUN pip3 install seaborn
RUN pip3 install altair

WORKDIR /app

COPY . .

EXPOSE 8501

CMD ["streamlit", "run", "index.py"]