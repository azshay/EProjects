# 1. Напишите программу, которая принимает на вход вещественное число и показывает сумму его цифр.
#
# Пример:
#
# 6782 -> 23
# 0,56 -> 11
import random


# def sumOfRealNumber(numberToCount):
#    sum = 0;
#
#    for i in range(len(numberToCount)):
#        if numberToCount[i] != "." and numberToCount[i] != "-" and numberToCount[i] != ',':
#            sum += int(numberToCount[i])
#
#    return sum
#
# print(sumOfRealNumber(input('Введите число: ')))

# 2. Напишите программу, которая принимает на вход число N и выдает набор произведений чисел от 1 до N.
#
# Пример:
#
# пусть N = 4, тогда [ 1, 2, 6, 24 ] (1, 1*2, 1*2*3, 1*2*3*4)

# def userFactorial(length):
#    factorialList = []
#
#    for i in range(1, length + 1):
#        j = i
#        sum = 1;
#        while j > 1:
#            sum *= j
#            j -= 1
#        factorialList.append(sum)
#
#    return factorialList

# print(userFactorial(int(input('Введите число: '))))

# 3. Задайте список из n чисел последовательности Sn = (Sn-1 + 3) и выведите на экран их сумму.
# ссылка на формулу https://disk.yandex.ru/i/smKmpgtfQv4lIA

# Для n = 6: {1: 4, 2: 7, 3: 10, 4: 13, 5: 16, 6: 19}

# def subsequence(n):
#     returnList = {}
#
#     returnList[1] = 4
#     for i in range(2, n + 1):
#         returnList[i] = returnList.get(i-1) + 3
#         print(returnList[i])
#
#     return returnList
#
# print(subsequence(int(input('Введите число: '))))

# 4. Задайте список из N элементов, заполненных числами из промежутка [-N, N].
# Найдите произведение элементов на указанных позициях. Позиции хранятся в файле file.txt в одной строке одно число.

# file = open('file.txt')
# total = 1;
# for line in file:
#     total *= int(line)
#
# print(total)

# 5. Реализуйте алгоритм перемешивания списка.+ 3

# def randomList(list):
#     random.shuffle(list)
#     return list
#
#
# print(randomList([1, 2, 3, 4, 5]))
