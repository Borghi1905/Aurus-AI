# importando bibliotecas
import pandas as pd
import numpy as np
from datetime import date

# colunas do dataset
#['paciente_id', 'idade', 'peso_kg', 'metabolismo','sensibilidade_farmacologica', 'indice_saude_base', 'dose_cafeina','dose_alcool', 'dose_nicotina', 'dose_melatonina', 'dose_ibuprofeno','dose_dipirona', 'dose_loratadina', 'dose_omeprazol', 'dose_metformina','dose_creatina', 'frequencia_cardiaca_bpm', 'nivel_sonolencia','nivel_ansiedade']

#leitura do dataset
df_pacientes = pd.read_csv("data/pacientes.csv")

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

