import streamlit as st
import pandas as pd
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt
import altair as alt

df = pd.read_csv('./Data/EmployEarnings Data.csv')

df = df.sample(10000)
st.subheader("Les industries de l'entreprises")

c=alt.Chart(df).mark_bar().encode(
    x='industry',
    y='count(industry)',
    color="industry"
)
st.altair_chart(c,use_container_width=True)

# * using seaborn
# fig = plt.figure(figsize=(10, 4))
# sns.countplot(data=df, x="industry")
# st.pyplot(fig)

# **************************************************

st.subheader("Les diplômes")
# fig = plt.figure(figsize=(10, 4))
# sns.countplot(data=df, x="degree")
# st.pyplot(fig)

c=alt.Chart(df).mark_bar().encode(
    x='degree',
    y='count(degree)',
    color="degree"
)

st.altair_chart(c,use_container_width=True)

# **************************************************

st.subheader("Les postes occupés en fonction de diplôme")
# fig = plt.figure(figsize=(10, 4))
# sns.scatterplot(data=df, x="degree", y="jobType")
# st.pyplot(fig)

c= alt.Chart(df).mark_point().encode(
    x='degree',
    y='jobType',
    color="jobType"
).interactive()

st.altair_chart(c,use_container_width=True)

# **************************************************

st.subheader("Le nombres de poste occupés en fonction de diplôme")
# fig = plt.figure(figsize=(10, 4))
# g = sns.catplot(data=df, x="degree", y="jobType", hue="jobType", errorbar="sd", palette="dark", alpha=.6, height=6)
# g.despine(left=True)

# st.pyplot(fig)

c = alt.Chart(df).mark_bar().encode(
    x='count(jobType):Q',
    y='degree:O',
    color='jobType:N',
)


st.altair_chart(c,use_container_width=True)

# **************************************************
st.subheader("la demande de dipôlme en fonction de l'industrie")

c=alt.Chart(df).mark_point().encode(
    x='industry',
    y='count(degree)',
    color="industry"
)

st.altair_chart(c,use_container_width=True)


# **************************************************

# option = st.selectbox(
#     'How would you like to be contacted?',
#     ('Email', 'Home phone', 'Mobile phone'))

# d=df[df["degree"] == "BACHELORS"].groupby(["degree", "industry"]).describe().salary
d=df.groupby(["degree", "industry"]).describe().salary

st.dataframe(data=d, use_container_width=True)