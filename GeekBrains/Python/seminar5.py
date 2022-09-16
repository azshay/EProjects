# Напишите программу, удаляющую из текста все слова, содержащие ""абв"".


# def deleteString(word):
#     return not word.__contains__("abc")


# print(list(filter(deleteString, ["abcsddsa", "asdsad", "abdssdabc"])))

# Создайте программу для игры с конфетами человек против человека.
# Условие задачи: На столе лежит 2021 конфета. Играют два игрока делая ход друг после друга.
# Первый ход определяется жеребьёвкой. За один ход можно забрать не более чем 28 конфет.
# Все конфеты оппонента достаются сделавшему последний ход.
# Сколько конфет нужно взять первому игроку, чтобы забрать все конфеты у своего конкурента?

# from random import randrange

# total = 2021
# firstPlayer = 0
# secondPlayer = 0

# currentPlayer = randrange(2) + 1

# print(f"Now it`s player: {currentPlayer}")

# while total > 0:
#     countOfCandies = 0

#     while countOfCandies == 0:
#         temp = int(
#             input(
#                 f"{currentPlayer} PLAYER, enter the amount of sweets (1-28, total {total}): "
#             )
#         )
#         if temp > 0 and temp <= 28 and temp <= total:
#             countOfCandies = temp

#     if currentPlayer == 1:
#         secondPlayer += countOfCandies
#     else:
#         firstPlayer += countOfCandies

#     total -= countOfCandies

#     if currentPlayer == 1:
#         currentPlayer = 2
#     else:
#         currentPlayer = 1

# if firstPlayer > secondPlayer:
#     print("firstPlayer won!")
# elif secondPlayer > firstPlayer:
#     print("secondPlayer won!")
# else:
#     print("friendship won")

# Создайте программу для игры в ""Крестики-нолики"".

# result = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]]

# for i in range(len(result)):
#     print(result[i])

# symbol = "X"

# for i in range(0, 9):
#     while True:
#         number = int(input(f"{symbol} symbol, number (0-2, 3-5, 6-8): "))
#         if number >= 0 and number <= 2:
#             temp = 0
#         elif number >= 3 and number <= 5:
#             temp = 1
#             number = number - 3
#         else:
#             temp = 2
#             number = number - 6

#         if result[temp][number] != "X" and result[temp][number] != "O":
#             result[temp][number] = symbol
#             break
#     for i in range(len(result)):
#         print(result[i])

#     if (
#         result[0][0] == result[1][1] == result[2][2]
#         or result[0][2] == result[1][1] == result[2][0]
#         or result[1][0] == result[1][1] == result[1][2]
#         or result[0][1] == result[1][1] == result[2][1]
#         or result[temp][0] == result[temp][1] == result[temp][2]
#         or result[0][number] == result[1][number] == result[2][number]
#     ):
#         print(f"{symbol} WON! :)")
#         break

#     if symbol == "X":
#         symbol = "O"
#     else:
#         symbol = "X"

# Реализуйте RLE алгоритм: реализуйте модуль сжатия и восстановления данных.

# uncompressedData = "AABBBBBC"
# compreessedData = ""
# uncompressedDataWithFunc = ""

# numberOfRepetitions = 1

# for i in range(len(uncompressedData)):
#     if i != len(uncompressedData) - 1:
#         if uncompressedData[i] == uncompressedData[i + 1]:
#             numberOfRepetitions += 1
#         else:
#             compreessedData += f"{numberOfRepetitions}{uncompressedData[i]}"
#             numberOfRepetitions = 1
#     else:
#         compreessedData += f"{numberOfRepetitions}{uncompressedData[i]}"

# print(compreessedData)

# i = 0

# while i < len(compreessedData):
#     for j in range(int(compreessedData[i])):
#         uncompressedDataWithFunc += compreessedData[i + 1]
#     i += 2

# print(uncompressedDataWithFunc)
