# 1. Задайте список из нескольких чисел. 
# Напишите программу, которая найдёт сумму элементов списка, стоящих на нечётной позиции.

# numbers = [2, 3, 5, 9, 3, 10]
# total = 0

# for i in range(len(numbers)):
#     if i % 2 != 0:
#         total += numbers[i]

# print(total)

# 2. Напишите программу, которая найдёт произведение пар чисел списка. 
# Парой считаем первый и последний элемент, второй и предпоследний и т.д.

# import math

# numbers = [2, 3, 5, 6]

# resultNumbers = []

# for i in range(int(math.ceil(len(numbers) / 2))):
#     resultNumbers.append(numbers[i] * numbers[len(numbers) - i - 1])

# print(resultNumbers)

# Задайте список из вещественных чисел. 
# Напишите программу, которая найдёт разницу между максимальным и 
# минимальным значением дробной части элементов.

# numbers = [1.1, 1.2, 5, 10.01]
# max = 0
# min = float("inf")

# for i in range(len(numbers)):
#     temp = round(numbers[i] % 1, 2)
#     if temp > max:
#         max = temp
#     elif temp < min and temp != 0:
#         min = temp
    
# print(max - min)

# 4. Напишите программу, которая будет преобразовывать десятичное число в двоичное.

# number = 45
# result = []

# while number > 2:
#     result.append(number % 2)
#     number = int(number / 2)

# if number == 2:
#     result.append(0)
#     result.append(1)
# else:
#     result.append(1)

# result.reverse()
# print("".join(map(str, result)))

# Задайте число. Составьте список чисел Фибоначчи, в том числе для отрицательных индексов.

# fibo = [0, 1]
# k = 8

# for i in range(k):
#     fibo.append(fibo[i] + fibo[i + 1])

# fibo.insert(0, 1)

# for i in range(k):
#     fibo.insert(0, fibo[1] - fibo[0])

# print(fibo)