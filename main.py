# importando bibliotecas
import pandas as pd
import numpy as np
from datetime import date

# colunas do dataset
#['paciente_id', 'idade', 'peso_kg', 'metabolismo','sensibilidade_farmacologica', 'indice_saude_base', 'dose_cafeina','dose_alcool', 'dose_nicotina', 'dose_melatonina', 'dose_ibuprofeno','dose_dipirona', 'dose_loratadina', 'dose_omeprazol', 'dose_metformina','dose_creatina', 'frequencia_cardiaca_bpm', 'nivel_sonolencia','nivel_ansiedade']

#leitura do dataset
df_pacientes = pd.read_csv("data/pacientes.csv")


#parte de todas as pessoas sem individualizar, apenas para pegar as informações gerais do dataset

#pegando o dia de hoje
hoje = date.today()

#pegando a quantidade de pessoas no dataset
quantidade_pessoas = df_pacientes["paciente_id"].count()

#calculando a média da frequência cardíaca 
frequencia_cardiaca_media = df_pacientes["frequencia_cardiaca_bpm"].mean()

#calculando a média do índice de saúde
indice_de_saude_medio = df_pacientes["indice_saude_base"].mean()

#calculando a média do nível de ansiedade
nivel_de_ansiedade_medio = df_pacientes["nivel_ansiedade"].mean()

#calculando a média do nível de sonolência
nivel_de_sonolencia_medio = df_pacientes["nivel_sonolencia"].mean()

#contando a quantidade de pessoas que tomaram cada tipo de dose
dose_cafeina = (df_pacientes["dose_cafeina"] > 0).sum()
dose_alcool = (df_pacientes["dose_alcool"] > 0).sum()
dose_nicotina = (df_pacientes["dose_nicotina"] > 0).sum()
dose_melatonina = (df_pacientes["dose_melatonina"] > 0).sum()
dose_ibuprofeno = (df_pacientes["dose_ibuprofeno"] > 0).sum()
dose_dipirona = (df_pacientes["dose_dipirona"] > 0).sum()
dose_loratadina = (df_pacientes["dose_loratadina"] > 0).sum()
dose_omeprazol = (df_pacientes["dose_omeprazol"] > 0).sum()
dose_metformina = (df_pacientes["dose_metformina"] > 0).sum()
dose_creatina = (df_pacientes["dose_creatina"] > 0).sum()

# criando um dicionário com as doses
doses = {
    "Cafeína": dose_cafeina,
    "Álcool": dose_alcool,
    "Nicotina": dose_nicotina,
    "Melatonina": dose_melatonina,
    "Ibuprofeno": dose_ibuprofeno,
    "Dipirona": dose_dipirona,
    "Loratadina": dose_loratadina,
    "Omeprazol": dose_omeprazol,
    "Metformina": dose_metformina,
    "Creatina": dose_creatina
}

# encontrando a dose mais utilizada
dose_mais_utilizada = max(doses, key=doses.get)

# calculando a porcentagem da dose mais utilizada
quantidade_mais_utilizada = doses[dose_mais_utilizada]
porcentagem_mais_utilizada = (quantidade_mais_utilizada / quantidade_pessoas) * 100
texto_mais_utilizada = f"{porcentagem_mais_utilizada:.2f} % dos pacientes"

#contando a quantidade de pessoas por faixa etária
idade_18_25 = ((df_pacientes["idade"] >= 18) & (df_pacientes["idade"] <= 25)).sum()
idade_26_35 = ((df_pacientes["idade"] >= 26) & (df_pacientes["idade"] <= 35)).sum()
idade_36_45 = ((df_pacientes["idade"] >= 36) & (df_pacientes["idade"] <= 45)).sum()
idade_46_60 = ((df_pacientes["idade"] >= 46) & (df_pacientes["idade"] <= 60)).sum()
idade_60mais = ((df_pacientes["idade"] > 60)).sum()

#contando a quantidade de pessoas por faixa de frequência cardíaca
coracao_40_50 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 40) & (df_pacientes["frequencia_cardiaca_bpm"] <= 50)).sum()
coracao_51_60 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 51) & (df_pacientes["frequencia_cardiaca_bpm"] <= 60)).sum()
coracao_61_70 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 61) & (df_pacientes["frequencia_cardiaca_bpm"] <= 70)).sum()
coracao_71_80 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 71) & (df_pacientes["frequencia_cardiaca_bpm"] <= 80)).sum()
coracao_81_90 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 81) & (df_pacientes["frequencia_cardiaca_bpm"] <= 90)).sum()
coracao_91_100 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 91) & (df_pacientes["frequencia_cardiaca_bpm"] <= 100)).sum()
coracao_101_110 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 101) & (df_pacientes["frequencia_cardiaca_bpm"] <= 110)).sum()
coracao_111_120 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 111) & (df_pacientes["frequencia_cardiaca_bpm"] <= 120)).sum()
coracao_121_130 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 121) & (df_pacientes["frequencia_cardiaca_bpm"] <= 130)).sum()
coracao_mais_de_130 = ((df_pacientes["frequencia_cardiaca_bpm"] >= 131)).sum()

#contando a quantidade de pessoas por faixa de índice de saúde
indice = df_pacientes["indice_saude_base"] * 100
saude_0_20 = ((indice >= 0) & (indice <= 20)).sum()
saude_21_40 = ((indice >= 21) & (indice <= 40)).sum()
saude_41_60 = ((indice >= 41) & (indice <= 60)).sum()
saude_61_80 = ((indice >= 61) & (indice <= 80)).sum()
saude_81_100 = ((indice >= 81) & (indice <= 100)).sum()

#vendo quantas pessoas tomam cada tipo de dose em %
porcentagem_cafeina = (df_pacientes["dose_cafeina"] > 0).sum()/quantidade_pessoas * 100
porcentagem_alcool = (df_pacientes["dose_alcool"] > 0).sum()/quantidade_pessoas * 100
porcentagem_nicotina = (df_pacientes["dose_nicotina"] > 0).sum()/quantidade_pessoas * 100
porcentagem_melatonina = (df_pacientes["dose_melatonina"] > 0).sum()/quantidade_pessoas * 100
porcentagem_ibuprofeno = (df_pacientes["dose_ibuprofeno"] > 0).sum()/quantidade_pessoas * 100
porcentagem_dipirona = (df_pacientes["dose_dipirona"] > 0).sum()/quantidade_pessoas * 100
porcentagem_loratadina = (df_pacientes["dose_loratadina"] > 0).sum()/quantidade_pessoas * 100
porcentagem_omeprazol = (df_pacientes["dose_omeprazol"] > 0).sum()/quantidade_pessoas * 100
porcentagem_metformina = (df_pacientes["dose_metformina"] > 0).sum()/quantidade_pessoas * 100
porcentagem_creatina = (df_pacientes["dose_creatina"] > 0).sum()/quantidade_pessoas * 100

# vendo o maximo de cada tipo de dose
max_cafeina = df_pacientes["dose_cafeina"].max()
max_alcool = df_pacientes["dose_alcool"].max()
max_nicotina = df_pacientes["dose_nicotina"].max()
max_melatonina = df_pacientes["dose_melatonina"].max()
max_ibuprofeno = df_pacientes["dose_ibuprofeno"].max()
max_dipirona = df_pacientes["dose_dipirona"].max()
max_loratadina = df_pacientes["dose_loratadina"].max()
max_omeprazol = df_pacientes["dose_omeprazol"].max()
max_metformina = df_pacientes["dose_metformina"].max()
max_creatina = df_pacientes["dose_creatina"].max()

# vendo a media de cada tipo de dose
media_cafeina = df_pacientes["dose_cafeina"].mean()
media_alcool = df_pacientes["dose_alcool"].mean()
media_nicotina = df_pacientes["dose_nicotina"].mean()
media_melatonina = df_pacientes["dose_melatonina"].mean()
media_ibuprofeno = df_pacientes["dose_ibuprofeno"].mean()
media_dipirona = df_pacientes["dose_dipirona"].mean()
media_loratadina = df_pacientes["dose_loratadina"].mean()
media_omeprazol = df_pacientes["dose_omeprazol"].mean()
media_metformina = df_pacientes["dose_metformina"].mean()
media_creatina = df_pacientes["dose_creatina"].mean()

