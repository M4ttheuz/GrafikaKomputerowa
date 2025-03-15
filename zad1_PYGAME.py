import pygame
import math

pygame.init()
win = pygame.display.set_mode((1200, 1200))
pygame.display.set_caption("Transformacje ośmiokąta")

# Kolory
CZERWONY = (255, 0, 0)
ZOLTY = (255, 255, 0)

# Parametry początkowe
def reset():
    return {
        "radius": 150,
        "angle_offset": 0,
        "scale_x": 1,
        "scale_y": 1,
        "translate_x": 0,
        "translate_y": 0
    }

params = reset()
center = (win.get_width() // 2, win.get_height() // 2)
sides = 8  # Liczba boków

# Funkcja do obliczania współrzędnych wierzchołków ośmiokąta
def get_polygon_points():
    points = []
    for i in range(sides):
        angle = i * (2 * math.pi / sides) + params["angle_offset"]
        x = center[0] + (params["radius"] * params["scale_x"]) * math.cos(angle) + params["translate_x"]
        y = center[1] + (params["radius"] * params["scale_y"]) * math.sin(angle) + params["translate_y"]
        points.append((x, y))
    return points

run = True
while run:
    win.fill(ZOLTY)
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_1:
                params = reset()
            elif event.key == pygame.K_2:
                params["radius"] *= 2
                params["angle_offset"] += math.pi / 4
            elif event.key == pygame.K_3:
                params["radius"] *= 1.5
                params["scale_y"] *= -1
            elif event.key == pygame.K_4:
                params["radius"] *= 2
                params["scale_x"] *= 1.3
            elif event.key == pygame.K_5:
                params["radius"] *= 2
                params["translate_y"] -= 100
            elif event.key == pygame.K_6:
                params["angle_offset"] += math.pi / 2
                params["scale_x"] *= 1.3
            elif event.key == pygame.K_7:
                params["radius"] *= 1.5
                params["scale_y"] *= -1
                params["scale_x"] *= -1
            elif event.key == pygame.K_8:
                params["scale_x"] *= 1.5
                params["angle_offset"] += math.pi / 4
            elif event.key == pygame.K_9:
                params["radius"] *= 2
                params["scale_x"] *= -1.3
                params["scale_y"] *= -1
    
    points = get_polygon_points()
    pygame.draw.polygon(win, CZERWONY, points)
    pygame.display.update()

pygame.quit()
