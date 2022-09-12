# 1. Напишите программу, которая принимает на вход цифру, обозначающую день недели, и проверяет, является ли этот день выходным.

# dayNumber = int(input())
#
# if dayNumber == 6 or dayNumber == 7:
#     print('да')
# elif dayNumber <= 0 or dayNumber > 7:
#     print('неверно введено число')
# else:
#     print('нет')

# 2. Напишите программу для. проверки истинности утверждения ¬(X ⋁ Y ⋁ Z) = ¬X ⋀ ¬Y ⋀ ¬Z для всех значений предикат.

# x = input('enter x: ')
# y = input('enter y: ')
# z = input('enter z: ')
#
# left = not (x or y or z)
# right = not x and not y and not z
#
# if left == right:
#     print('истина')
# else:
#     print('что-то пошло не так')

# 3. Напишите программу, которая принимает на вход координаты точки (X и Y), причём X ≠ 0 и Y ≠ 0 и выдаёт номер четверти плоскости, в которой находится эта точка (или на какой оси она находится).

# x = int(input('enter x: '))
# y = int(input('enter y: '))

# while (x == 0 or y == 0):
#     print('Пожалуйста, введите корректные числа')
#     x = int(input('enter x: '))
#     y = int(input('enter y: '))

# if x > 0 and y < 0:
#     print('4')
# elif x > 0 and y > 0:
#     print('1')
# elif x < 0 and y < 0:
#     print('3')
# else:
#     print('2')

# 4. Напишите программу, которая по заданному номеру четверти, показывает диапазон возможных координат точек в этой четверти (x и y).

# num = int(input('enter numb: '))
#
# if num == 1:
#     print('x > 0 and y > 0')
# elif num == 3:
#     print('x < 0 and y < 0')
# elif num == 4:
#     print('x > 0 and y < 0')
# elif num == 2:
#     print('x < 0 and y > 0')
# else:
#     print('введено неверное число')

# 5. Напишите программу, которая принимает на вход координаты двух точек и находит расстояние между ними в 2D пространстве.

firstDot = [0, 0]
secondDot = [0, 0]
print(firstDot, secondDot)

firstDot[0] = int(input('x1: '))
firstDot[1] = int(input('y1: '))
secondDot[0] = int(input('x2: '))
secondDot[1] = int(input('y2: '))

print(((secondDot[0] - firstDot[0]) ** 2 + (secondDot[1] - firstDot[1]) ** 2) ** 0.5)