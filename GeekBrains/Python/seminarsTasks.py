from re import A

# # Задача из лекции

# file = open("D:/Web-dev/LProjects/GeekBrains/Python/file.txt", "r")

# list = [(int(i), int(i) ** 2) for i in file if int(i) % 2 == 0]

# file.close()

# print(list)

# Задача из семинара 1 (27 задача)


def find_max_min(data):
    tempList = data.split()
    result = [float("-inf"), float("inf")]
    for i in range(len(tempList)):
        if int(tempList[i]) > result[0]:
            result[0] = int(tempList[i])
        elif int(tempList[i]) < result[1]:
            result[1] = int(tempList[i])

    return result


print(find_max_min("12 346 62 34 9 25623 42 34"))

# test_data = [["12 346 62 34 9 25623 42 34", [25623, 9]]]

# for nums, expexted in test_data:
#     assert find_max_min(map(int, nums.split(" "))) == expected
