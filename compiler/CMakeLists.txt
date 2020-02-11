cmake_minimum_required(VERSION 3.2 FATAL_ERROR)
cmake_policy(VERSION 3.2)

project(san
    VERSION "1.0.1"
    DESCRIPTION "SAN compiler"
)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

#---------------------------------------------------------------
# Configure and compile ANTLR4
#---------------------------------------------------------------
add_subdirectory("${CMAKE_CURRENT_SOURCE_DIR}/libs/antlr4/runtime/Cpp")

include_directories("${CMAKE_CURRENT_SOURCE_DIR}/libs/antlr4/runtime/Cpp/runtime/src")

#---------------------------------------------------------------
# Configure and compile LLVM
#---------------------------------------------------------------
add_subdirectory("${CMAKE_CURRENT_SOURCE_DIR}/libs/llvm")

add_definitions(${LLVM_DEFINITIONS})
include_directories(${LLVM_INCLUDE_DIRS})

#---------------------------------------------------------------
# Configure /src directory
#---------------------------------------------------------------
file(GLOB_RECURSE SRC_SOURCES "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp")

#---------------------------------------------------------------
# Configure all sources
#---------------------------------------------------------------
set(SOURCES ${SRC_SOURCES})

add_executable(${PROJECT_NAME} ${SOURCES})

#---------------------------------------------------------------
# Configure all includes
#---------------------------------------------------------------
set(INCLUDES 
    "${CMAKE_CURRENT_SOURCE_DIR}/include"
    "${CMAKE_CURRENT_SOURCE_DIR}/src"
)

target_include_directories(${PROJECT_NAME} PUBLIC ${INCLUDES})

#---------------------------------------------------------------
# Compiling and linking the project
#---------------------------------------------------------------
target_link_libraries(${PROJECT_NAME} antlr4_static)
