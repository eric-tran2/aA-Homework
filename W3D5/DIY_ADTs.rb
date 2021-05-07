#Exercise 1 - Stack ## LIFO // Last In First Out 

class Stack
    def initialize
        @underlying_array = []
    end

    def push(ele)
        underlying_array.push(ele) # adding an element to the stack is adding it to the end, so just push will << one/many
                                   # into the back of an array
        return ele
    end

    def pop
        underlying_array.pop # pop removes the end 
        # popping bc its LIFO, removing the last one to come in 
    end

    def peek
        underlying_array.last
        # returning the last element, meaning the top of the stack
        # which the top is the last of the stack, so the last of the array
        # which is .last 
    end

    private
    attr_reader :underlying_array

end


#Exercise 2 - Queue ## FIFO // First In First Out 

class Queue
    def initialize
        @underlying_array = []
    end

    def unqueue(ele)
        underlying_array.push(ele)
        return ele
    end

    def dequeue
        underlying_array.shift
    end

    def peek
        underlying_array.first
    end

    private
    attr_reader :underlying_array
end


#Exercise 3 - Map

class Map
    def initialize
        @underlying_array = []
    end

    def set(key,value)
        pair_index = underlying_array.index { |pair| pair[0] == key}
        if 

    end

    def get(key)
        underlying_array.each do |pair|
            return pair[1] if pair[0] == key
        end
        return nil
    end

    def delete(key)
        value = get(key)
        underlying_array.reject! do |pair|
            pair[0] == key
        end
        return value
    end

    def show
        deep_dup(underlying_array)
    end

    private
    attr_reader :underlying_array

    def deep_dup(arr)
        array = []
        arr.each do |ele|
            if ele.is.a?(Array)
                return deep_dup(ele)
            else
                return ele
            end
        end
    end

end