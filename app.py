import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Hotel Capelli Talca - PMS", layout="wide", initial_sidebar_state="collapsed")

# Ocultar márgenes y barras de Streamlit para que se vea a pantalla completa
st.markdown("""
    <style>
        #MainMenu, header, footer {visibility: hidden;}
        .block-container {padding: 0 !important; max-width: 100% !important;}
        iframe {border: none !important; width: 100vw !important; height: 100vh !important;}
    </style>
""", unsafe_allow_html=True)

with open("hotel-v4.html", "r", encoding="utf-8") as f:
    html_code = f.read()

components.html(html_code, height=950, scrolling=True)
