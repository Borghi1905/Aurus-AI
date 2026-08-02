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

# parte de individualização, para pegar as informações de cada paciente

id_desejado = int(input("Digite o ID do paciente desejado: "))

# escolhendo o paciente
paciente = df_pacientes[df_pacientes["paciente_id"] == id_desejado]

# filtro se o paciente existe ou não, caso não exista, o programa é encerrado
if paciente.empty:
    print("Paciente não encontrado.")
    exit()

# transforma o DataFrame em uma Series (uma única linha)
paciente = paciente.iloc[0]

# pegando as informações do paciente
idade = paciente["idade"]
peso = paciente["peso_kg"]
metabolismo = paciente["metabolismo"]
sensibilidade_farmacologica = paciente["sensibilidade_farmacologica"]
indice_saude_base = paciente["indice_saude_base"]

dose_cafeina = paciente["dose_cafeina"]
dose_alcool = paciente["dose_alcool"]
dose_nicotina = paciente["dose_nicotina"]
dose_melatonina = paciente["dose_melatonina"]
dose_ibuprofeno = paciente["dose_ibuprofeno"]
dose_dipirona = paciente["dose_dipirona"]
dose_loratadina = paciente["dose_loratadina"]
dose_omeprazol = paciente["dose_omeprazol"]
dose_metformina = paciente["dose_metformina"]
dose_creatina = paciente["dose_creatina"]

frequencia_cardiaca_bpm = paciente["frequencia_cardiaca_bpm"]
nivel_sonolencia = paciente["nivel_sonolencia"]
nivel_ansiedade = paciente["nivel_ansiedade"]



# Comparações do paciente com a média do dataset

# Frequência Cardíaca
if frequencia_cardiaca_bpm > frequencia_cardiaca_media:
    comparacao_frequencia_cardiaca = "Acima da média"
elif frequencia_cardiaca_bpm < frequencia_cardiaca_media:
    comparacao_frequencia_cardiaca = "Abaixo da média"
else:
    comparacao_frequencia_cardiaca = "Na média"

# Índice de Saúde
if indice_saude_base > indice_de_saude_medio:
    comparacao_indice_saude = "Acima da média"
elif indice_saude_base < indice_de_saude_medio:
    comparacao_indice_saude = "Abaixo da média"
else:
    comparacao_indice_saude = "Na média"

# Ansiedade
if nivel_ansiedade > nivel_de_ansiedade_medio:
    comparacao_nivel_ansiedade = "Acima da média"
elif nivel_ansiedade < nivel_de_ansiedade_medio:
    comparacao_nivel_ansiedade = "Abaixo da média"
else:
    comparacao_nivel_ansiedade = "Na média"

# Sonolência
if nivel_sonolencia > nivel_de_sonolencia_medio:
    comparacao_nivel_sonolencia = "Acima da média"
elif nivel_sonolencia < nivel_de_sonolencia_medio:
    comparacao_nivel_sonolencia = "Abaixo da média"
else:
    comparacao_nivel_sonolencia = "Na média"

# Peso
peso_medio = df_pacientes["peso_kg"].mean()

if peso > peso_medio:
    comparacao_peso = "Acima da média"
elif peso < peso_medio:
    comparacao_peso = "Abaixo da média"
else:
    comparacao_peso = "Na média"


# Situação das doses em relação à média do dataset

# Cafeína
if dose_cafeina == 0:
    status_cafeina = "Não utiliza"
elif dose_cafeina > media_cafeina:
    status_cafeina = "Acima da média"
elif dose_cafeina < media_cafeina:
    status_cafeina = "Abaixo da média"
else:
    status_cafeina = "Na média"

# Álcool
if dose_alcool == 0:
    status_alcool = "Não utiliza"
elif dose_alcool > media_alcool:
    status_alcool = "Acima da média"
elif dose_alcool < media_alcool:
    status_alcool = "Abaixo da média"
else:
    status_alcool = "Na média"

# Nicotina
if dose_nicotina == 0:
    status_nicotina = "Não utiliza"
elif dose_nicotina > media_nicotina:
    status_nicotina = "Acima da média"
elif dose_nicotina < media_nicotina:
    status_nicotina = "Abaixo da média"
else:
    status_nicotina = "Na média"

# Melatonina
if dose_melatonina == 0:
    status_melatonina = "Não utiliza"
elif dose_melatonina > media_melatonina:
    status_melatonina = "Acima da média"
elif dose_melatonina < media_melatonina:
    status_melatonina = "Abaixo da média"
else:
    status_melatonina = "Na média"

# Ibuprofeno
if dose_ibuprofeno == 0:
    status_ibuprofeno = "Não utiliza"
elif dose_ibuprofeno > media_ibuprofeno:
    status_ibuprofeno = "Acima da média"
elif dose_ibuprofeno < media_ibuprofeno:
    status_ibuprofeno = "Abaixo da média"
else:
    status_ibuprofeno = "Na média"

# Dipirona
if dose_dipirona == 0:
    status_dipirona = "Não utiliza"
elif dose_dipirona > media_dipirona:
    status_dipirona = "Acima da média"
elif dose_dipirona < media_dipirona:
    status_dipirona = "Abaixo da média"
else:
    status_dipirona = "Na média"

# Loratadina
if dose_loratadina == 0:
    status_loratadina = "Não utiliza"
elif dose_loratadina > media_loratadina:
    status_loratadina = "Acima da média"
elif dose_loratadina < media_loratadina:
    status_loratadina = "Abaixo da média"
else:
    status_loratadina = "Na média"

# Omeprazol
if dose_omeprazol == 0:
    status_omeprazol = "Não utiliza"
elif dose_omeprazol > media_omeprazol:
    status_omeprazol = "Acima da média"
elif dose_omeprazol < media_omeprazol:
    status_omeprazol = "Abaixo da média"
else:
    status_omeprazol = "Na média"

# Metformina
if dose_metformina == 0:
    status_metformina = "Não utiliza"
elif dose_metformina > media_metformina:
    status_metformina = "Acima da média"
elif dose_metformina < media_metformina:
    status_metformina = "Abaixo da média"
else:
    status_metformina = "Na média"

# Creatina
if dose_creatina == 0:
    status_creatina = "Não utiliza"
elif dose_creatina > media_creatina:
    status_creatina = "Acima da média"
elif dose_creatina < media_creatina:
    status_creatina = "Abaixo da média"
else:
    status_creatina = "Na média"

