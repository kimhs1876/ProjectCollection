class Country(object): #Super class # 객체지향 프로그래밍
    name = 'Country Name'
    population = 'Population'
    capital = 'Capital'

    def show(self):
        print('Country Class Method')

class Korea(Country): #Sub class # 객체지향 프로그래밍

    def show_name(self):
        print(f'Country Name is {self.name}')

def execute(): # 함수형 프로그래밍
    k = Korea()
    k.name = 'KOREA'
    k.show_name()

execute()