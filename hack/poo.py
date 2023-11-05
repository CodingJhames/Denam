
class Persona:
    def __init__( self, nombre, edad ):
        self.nombre = nombre
        self.edad = edad
    
    def saludar(self):
        print(f"Hola, soy {self.nombre} y tengo {self.edad} años")

persona = Persona("james", 30 )
print( persona.nombre)
print( persona.edad )

persona.saludar()

mi_diccionario = {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid"
}


for clave in mi_diccionario:
    print( clave, ":", mi_diccionario[clave] )


# Neetcode Two Sum

dicto = {}

for i in nums:
    complemento = target - nums[i]

    


