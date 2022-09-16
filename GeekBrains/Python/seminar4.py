# 1. Вычислить число c заданной точностью d

# import math

# d = 0.001

# print(f"%.{len(str(d)) - 2}f" % math.pi)

# 2. Задайте натуральное число N. Напишите программу, которая составит список простых множителей числа N.


# def primeFactors(n):
#     returnList = []
#     d = 2
#     while d * d <= n:
#         if n % d == 0:
#             returnList.append(d)
#             n //= d
#         else:
#             d += 1
#     if n > 1:
#         returnList.append(n)
#     return returnList


# print(primeFactors(33))


# 3. Задайте последовательность чисел. Напишите программу, которая выведет список неповторяющихся элементов исходной последовательности.


# def nonRepeatingSequence(seq):
#     resultList = []
#     for i in range(len(seq)):
#         if seq[i] not in resultList:
#             resultList.append(seq[i])

#     return resultList


# print(nonRepeatingSequence([1, 1, 1, 2, 3, 4, 5, 6, 7, 7]))

# 4. Задана натуральная степень k.
# Сформировать случайным образом список коэффициентов (значения от 0 до 100) многочлена и записать в файл многочлен степени k.


# def print_poly(coeff):
#     n = len(coeff)
#     for i in range(n):
#         print(coeff[i], end="")
#         if i != 0:
#             print("x^", i, end="", sep="")
#         if i != n - 1:
#             print(" + ", end="")


# print_poly([2, 4, 7, 8])

# 5. Даны два файла, в каждом из которых находится запись многочлена. Задача - сформировать файл, содержащий сумму многочленов.

# file1 = open("D:/Web-dev/LProjects/GeekBrains/Python/firstFile.txt", "r")
# file2 = open("D:/Web-dev/LProjects/GeekBrains/Python/secondFile.txt", "r")

# firstPoly = file1.read().split(" + ")
# secondPoly = file2.read().split(" + ")
# result = []

# for i in range(len(firstPoly)):
#     result.append(int(firstPoly[i].split("*")[0]))

# for i in range(len(secondPoly)):
#     result[i] = result[i] + int(secondPoly[i].split("*")[0])

# print(result)

# file1.close()
# file2.close()
