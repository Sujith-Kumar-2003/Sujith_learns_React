def main():
    total = int(input())
    for i in range(total):
        line = input()
        nice = line.split(" ")
        a = int(nice[0])
        b =int(nice[1]) 
        c = int(nice[2])

        if a + b == c:
            print("+")
        else:
            print("-")

if __name__ == "__main__":
    main()