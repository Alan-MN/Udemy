def calcula_degrus():
    altura = float(input('infrome a altura em metros'))
    altura_degraus = float(input('informe a altura dos degraus em cm'))/100

    qtd_degraus = altura/altura_degraus

    print(f'serão necessários {qtd_degraus} degraus')


calcula_degrus()